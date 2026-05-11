from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle
import requests
from bs4 import BeautifulSoup   
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import psycopg2

load_dotenv()

app = Flask(__name__)
CORS(app)

df = pickle.load(open('df.pkl', 'rb'))
teams = pickle.load(open('teams.pkl', 'rb'))
seasons = pickle.load(open('season.pkl', 'rb'))

def get_connection():
    try:
        return psycopg2.connect(
            database=os.getenv("DB"),
            user=os.getenv('USER'),
            password=os.getenv("PASSWORD"),
            host=os.getenv("HOST"),
            port=os.getenv('PORT'),
        )
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None
# conn = get_connection()
# if conn:
#     print("Connection to the PostgreSQL established successfully.")
# else:
#     print("Connection to the PostgreSQL encountered and error.")
    
# table_name = "Player_img"

# with app.app_context():
#     curr = conn.cursor()
#     curr.execute(f'''
#         CREATE TABLE IF NOT EXISTS {table_name} (
#             name VARCHAR(1000) PRIMARY KEY,
#             img VARCHAR(2000)
#         );
#     ''')
#     conn.commit()
#     curr.close()

@app.route('/get_teams')
def get_teams():
    return jsonify({'result': teams.tolist()})

@app.route('/get_seasons')
def get_seasons():
    return jsonify({'result': seasons.tolist()})

@app.route('/get_team_players')
def get_team_players():
    team = request.args.get('team')
    season = request.args.get('season')
    
    if season != 'All':
        updated_df = df[df['Season'] == season]
    else:
        updated_df = df
        
    players_df = updated_df[(updated_df['Team1'] == team)]['Team1Players']
    teams = set()
    players_df.apply(lambda x : teams.update(eval(x)))
    teams = list(teams)
    teams_value = sorted(teams)
    return jsonify({'result': teams_value})

@app.route('/get_player_analysis')
def get_player_analysis():
    player = request.args.get('player')
    season = request.args.get('season')
    team = request.args.get('team')
    
    if player:
        if season != 'All':
            filtered_df = df[(df['Season'] == season) & ((df['Team1'] == team) | (df['Team2'] == team))]
        else:
            filtered_df = df[(df['Team1'] == team) | (df['Team2'] == team)]
            
        runs = int(filtered_df[filtered_df['batter'] == player]['batsman_run'].sum())
        
        fours = (filtered_df[(filtered_df['batter'] == player) & (filtered_df['batsman_run'] == 4)].shape[0])
        fours_history = (filtered_df[(filtered_df['batter'] == player) & (filtered_df['batsman_run'] == 4)]).groupby('Date')['batsman_run'].sum().reset_index().to_dict(orient='records')[:100]
        
        six = (filtered_df[(filtered_df['batter'] == player) & (filtered_df['batsman_run'] == 6)].shape[0])
        six_history = (filtered_df[(filtered_df['batter'] == player) & (filtered_df['batsman_run'] == 6)]).groupby('Date')['batsman_run'].sum().reset_index().to_dict(orient='records')[:100]
        
        wickets = int(filtered_df[(filtered_df['bowler'] == player) & (filtered_df['isWicketDelivery'] == 1) & (filtered_df['kind'] != 'run out')].shape[0])
        
        balls_played = int(filtered_df[filtered_df['batter'] == player].shape[0])
        
        match_played = int(filtered_df[filtered_df['Team1Players'].apply(lambda arr : arr.find(player) > -1)]['ID'].nunique()) + int(filtered_df[filtered_df['Team2Players'].apply(lambda arr : arr.find(player) > -1)]['ID'].nunique())
        
        batting_history = filtered_df[(filtered_df['batter'] == player)].groupby('Date')['batsman_run'].sum().reset_index().to_dict(orient='records')
        
        bowling_history = filtered_df[(filtered_df['bowler'] == player) & (filtered_df['kind'] != 'run out')].groupby('Date')['isWicketDelivery'].sum().reset_index().to_dict(orient='records')
        
        catches = filtered_df[(filtered_df['isWicketDelivery'] == 1) & ((filtered_df['kind'] == 'caught') | (filtered_df['kind'] == 'caught and bowled')) & (filtered_df['fielders_involved'] == player)].groupby("Date")['isWicketDelivery'].sum().reset_index().to_dict(orient='records')
        
        dots = filtered_df[(filtered_df['batsman_run'] == 0) & (filtered_df['extras_run'] == 0) & (df['bowler'] == player)].groupby('Date')['batsman_run'].count().reset_index().to_dict(orient='records')
        
        return jsonify({'runs': runs, 'wickets': wickets, 'balls_played': balls_played, 'match_played': match_played, 'batting_history': batting_history, 'bowling_history': bowling_history, 'fours': fours, 'fours_history': fours_history, 'six': six, 'six_history': six_history, 'catches': catches, 'dots': dots, 
                    })
    else :
        return jsonify({"error": "Batsman not found"})

@app.route('/get_team_analysis')
def get_team_analysis():
    team_name = request.args.get('team')
    season = request.args.get('season')
    
    season_df = None
    if season != 'All':
        season_df = df[df['Season'] == season]        
    else :
        season_df = df
        
    lossers = []
    loss_df = season_df[((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name)) & (season_df['WinningTeam'] != team_name)].groupby("ID")
    for id, team in loss_df:
        loss = season_df[season_df['ID'] == id].iloc[-1]

        dict = {
            'Team': loss['WinningTeam'],
            'Date': loss['Date'],
            'MatchNumber': loss['MatchNumber'],
            'Season': loss['Season'],
            'LossBy': loss['WonBy'],
            'Margin': (loss['Margin']),
        }
        lossers.append(dict)
           
    batting_team_df = season_df[((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name)) & (season_df['BattingTeam'] == team_name)]
    bowling_team_df = season_df[((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name)) & (season_df['BattingTeam'] != team_name) & (season_df['kind'] != 'run out')]
    fielding_df = season_df[((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name)) & (season_df['BattingTeam'] != team_name) & (season_df['kind'] == 'caught')]
    bowling = bowling_team_df.groupby("bowler")['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:50]
    batting = batting_team_df.groupby("batter")['batsman_run'].sum().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:50]
    catches = fielding_df.groupby("fielders_involved")['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:50]
    
    most_wickets = season_df[(season_df['isWicketDelivery'] == 1) & ((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name))].groupby(['ID', 'bowler'])['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:50]
            
    response = {
        'bowling': bowling,
        'catches': catches,
        'batting': batting,
        'most_wickets': most_wickets,
        # 'lossers': lossers,
    }
    return jsonify(response)

@app.route('/get_loosers')
def get_loosers():
    team_name = request.args.get('team')
    season = request.args.get('season')
    
    season_df = None
    if season != 'All':
        season_df = df[df['Season'] == season]        
    else :
        season_df = df
        
    lossers = []
    loss_df = season_df[((season_df['Team1'] == team_name) | (season_df['Team2'] == team_name)) & (season_df['WinningTeam'] != team_name)].groupby("ID")
    for id, team in loss_df:
        loss = season_df[season_df['ID'] == id].iloc[-1]

        dict = {
            'Team': loss['WinningTeam'],
            'Date': loss['Date'],
            'MatchNumber': loss['MatchNumber'],
            'Season': loss['Season'],
            'LossBy': loss['WonBy'],
            'Margin': (loss['Margin']),
        }
        lossers.append(dict)
          
    return jsonify({'lossers': lossers,})

@app.route('/get_winners')
def get_winners():
    team_name = request.args.get('team')
    season = request.args.get('season')
    
    season_df = None
    if season != 'All':
        season_df = df[df['Season'] == season]        
    else :
        season_df = df
    
    team_analysis = season_df[(season_df['BattingTeam'] == team_name)].groupby("ID")

    winners = []
    for id, team in team_analysis:
        if team_analysis.get_group(id).iloc[:1]['WinningTeam'].values[0] == team_name:
            season_df = df[df['ID'] == id]
            win = None
            win2 = season_df[season_df['innings'] == 2].iloc[-1]
            
            if win2 is not None and win2['BattingTeam'] == team_name:
                win = win2
                dict = {
                    'Team': win['Team1'] if win['Team1'] != team_name else win['Team2'],
                    'Date': win['Date'],
                    'MatchNumber': win['MatchNumber'],
                    'Season': win['Season'],
                    'WonBy': win['WonBy'],
                    'Margin': win['Margin'],
                    'Over': int(win['overs']),
                    'Ball': int(win['ballnumber']),
                    'Last': 'Batter' if win['innings'] == 2 else 'Bowler',
                    'LastMan': win['batter'] if win['innings'] == 2 else win['bowler'],
                    'LastRun': int(win['batsman_run']),
                }
                winners.append(dict)
            else:
                win = season_df[(season_df['innings'] == 2) & (season_df['isWicketDelivery'] == 1)].iloc[-1]
                dict = {
                    'Team': win['Team1'] if win['Team1'] != team_name else win['Team2'],
                    'Date': win['Date'],
                    'MatchNumber': win['MatchNumber'],
                    'Season': (win['Season']),
                    'WonBy': win['WonBy'],
                    'Margin': (win['Margin']),
                    'Over': int(win['overs']),
                    'Ball': int(win['ballnumber']),
                    'Last': 'Bowler',
                    'LastMan': win['bowler'] ,
                    'LastRun': int(win['batsman_run']),
                }
                winners.append(dict)
    return jsonify({'winners': winners})

@app.route('/overall_analysis')
def overall_analysis():
    year = request.args.get("season")
    
    season_df = None
    if year != 'All':
        season_df = df[df['Season'] == year]        
    else :
        season_df = df
    
    batting = season_df.groupby("batter")['batsman_run'].sum().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:100]
    fours = season_df[season_df['batsman_run'] == 4].groupby("batter")['batsman_run'].sum().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:100]
    sixes = season_df[season_df['batsman_run'] == 6].groupby("batter")['batsman_run'].sum().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:100]
    biggest_score = season_df.groupby(["ID", 'batter'])['batsman_run'].sum().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:100]

    bowling = season_df[season_df['kind'] != 'run out'].groupby("bowler")['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:100]
    most_wickets = season_df[season_df['isWicketDelivery'] == 1].groupby(['ID', 'bowler'])['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:100]
    dots = season_df[(season_df['batsman_run'] == 0) & (season_df['extras_run'] == 0)].groupby('bowler')['batsman_run'].count().reset_index().sort_values('batsman_run', ascending=False).to_dict(orient='records')[:100]

    catches = season_df[(season_df['isWicketDelivery'] == 1) & ((season_df['kind'] == 'caught') | (season_df['kind'] == 'caught and bowled'))].groupby("fielders_involved")['isWicketDelivery'].sum().reset_index().sort_values('isWicketDelivery', ascending=False).to_dict(orient='records')[:100]
    
    return jsonify({
        'batting': batting,
        'fours': fours,
        'sixes': sixes,
        'biggest_score': biggest_score,
        'bowling': bowling,
        'dots': dots,
        'catches': catches,
        'most_wickets': most_wickets,
    })


@app.route('/get_img')
def get_img():
    player = request.args.get('player')
    player = str(player.lower())
    
    # curr = conn.cursor()
    
    # query = f'SELECT * FROM {table_name} WHERE name = %s;'
    # curr.execute(query, (player,))
    # data = curr.fetchone()
    # curr.close()
    
    # if data:
    #     return jsonify({'images': data[2]})
    # else:
    player_name = player.replace(" ", "+") + '+ ipl high quality'
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win 64 ; x64) Apple WeKit /537.36(KHTML , like Gecko) Chrome/80.0.3987.162 Safari/537.36'}
    url = f"https://www.google.com/search?sca_esv=94d2d025c9ea360a&rlz=1C1UEAD_enIN1078IN1078&sxsrf=ACQVn0-Wm8U_89QVRKrlLpLlHiEslt0JzA:1711351590733&q={player_name}&uds=AMwkrPsOnkftQ-1HCG5-ibbcg4vTHSPyLAm-mLnbp3Y_o1QkRIVN-VarmVLzFcaQBuZTdgN_p0l7Oklg3-7ggYon9JMNzDTMoRbVow9vxOgrPVpA7TVL9yy-AbrVbdQNIfpjNWgSNHMMWuy3aTHINyd9WTXSWC8GkmmB57Elr9u8JxIHyBLg_GRPkIOrISLPPUdGRn61Uih2b_EOPX3s0WkhMNAYYb-99Q7FTZmmJDtKLOm-0Bvd1etJipPvdszPz9cLconDlDoXbZ6rPzIaF6ezjqzq0aYGRvjrDYJ-N8ck94Lg4GCWPAc&udm=2&prmd=invmsbtz&sa=X&ved=2ahUKEwjb0pq98Y6FAxXfRmcHHZIQAxkQtKgLegQICxAB&biw=1536&bih=742&dpr=1.25"
    
    data = requests.get(url, headers=headers).text
    soup = BeautifulSoup(data, 'lxml')
    images = soup.find_all('img')
    finals = []
    for img in images:
        if(img['src'].find('https')>-1):
            finals.append(img['src'])
    img = finals[0]
    
    # curr = conn.cursor()
    # curr.execute(f'''
    #     INSERT INTO {table_name} (name, img)
    #     VALUES (%s, %s)
    #     RETURNING id;
    # ''', (player, img))
    # conn.commit()
    # curr.close()
        
    return jsonify({'images': img})
 
 
@app.route("/get-db")
def get_db():
    return jsonify('Hello')
    
if __name__ == '__main__':    
    app.run(debug=False)
