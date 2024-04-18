"""
---------------
SPORTSRADAR API
---------------
"""

import requests

key = "QG6qvKeoIJ6MNIb2h3yP2a8eQxpAYkj96fABL4wi"

def PlayerInfo(ID, player_name):
    game_ID = ID

    url = "https://api.sportradar.com/nba/trial/v8/en/games/{game_ID}/pbp.json?api_key={key}".format(game_ID = game_ID, key = key);

    headers = {"accept": "application/json"}

    response = requests.get(url, headers=headers)

    player = player_name

    data = response.json()

    # Initialize a variable to store Goga Bitadze's points
    player_points = 0

    # Iterate through each event in the Play-by-Play (PBP) data
    for event in data["periods"]:
        for evt in event["events"]:
            # Check if the event involves Goga Bitadze
            if player in evt.get("description", ""):
                # Check if the event is a made field goal (e.g., shot made by Goga Bitadze)
                player_makes = player.lower() + " makes"
                if "makes" in evt.get("description", ""):
                    description = evt.get("description", "").lower()
                    if player_makes in description:
                        if "two point" in description:
                            player_points += 2
                        elif "free throw" in description:
                            player_points += 1
                        elif "three point" in description:
                            player_points += 3


    print(player + "'s points:", player_points)

def Games():
    date = "2024/04/03"
    # Define the URL
    url = "https://api.sportradar.com/nba/trial/v8/en/games/{date}/schedule.json?api_key={key}".format(date = date, key = key)

    # Make a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Extract information about NBA games scheduled for the specified date
        for game in data["games"]:
            game_id = game["id"]
            home_team = game["home"]["name"]
            away_team = game["away"]["name"]
            print(f"Home Team: {home_team}, Away Team: {away_team}, Game ID: {game_id}")
    else:
        print("Error:", response.status_code)

def find_player_game(player_name, date):
    # Construct the URL for the schedule API
    schedule_url = f"https://api.sportradar.com/nba/trial/v8/en/games/{date}/schedule.json?api_key={key}"

    # Make a GET request to the schedule API
    schedule_response = requests.get(schedule_url)

    # Check if the request was successful
    if schedule_response.status_code == 200:
        # Parse the JSON response
        schedule_data = schedule_response.json()

        # Iterate through the games scheduled for the specified date
        for game in schedule_data["games"]:
            # Check if the player is participating in the game
            if player_name in [game["home"]["name"], game["away"]["name"]]:
                # Return the game ID
                return game["id"]

    # Return None if the player is not playing on the given date
    return None

player = "Kevin Durant"
date = "2024/04/03"
game_ID = find_player_game(player, date)
if game_ID:
    print(f"{player} is playing in game ID: {game_ID}")
else:
    print(f"{player} is not playing on {date}")

"""
Games()
"""

game_ID = "afb6b532-b001-4889-b4c6-ded47e4226b7"

player = "Kevin Durant"
PlayerInfo(game_ID, player)
#Expected: 32
#Actual: 32

player = "Bradley Beal"
PlayerInfo(game_ID, player)
#Expected: 7
#Actual: 7

player = "Bol Bol"
PlayerInfo(game_ID, player)
#Expected: 15
#Actual: 15


"""
---------------
MONGO DB
---------------

username: matttavares9
password: WP6fRmKKrNzZ83uh
IP Address: 129.161.88.153

"""
# MongoDB connection details
