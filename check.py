import requests

def load_drivers():
    driver_id = '4'
    try:
        response = requests.get('https://api.openf1.org/v1/drivers?driver_number=' + driver_id)
        print('https://api.openf1.org/v1/drivers?driver_number=' + driver_id)
        response.raise_for_status()  # Raises an error for bad status codes
        drivers_data = response.json()
        # print(drivers_data)  # This is like console.log in JavaScript
    except requests.RequestException as e:
        print(f"Failed to fetch drivers: {e}")

load_drivers()