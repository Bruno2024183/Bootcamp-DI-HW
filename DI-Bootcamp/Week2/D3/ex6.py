import datetime

def minutes_lived(birthdate_str):
    # Convert the birthdate string to a datetime object
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
                                           
    # Get the current date and time
    now = datetime.datetime.now()

    # Calculate the time difference
    time_lived = now - birthdate

    # Convert the time lived to minutes
    minutes_lived = time_lived.total_seconds() / 60

    # Display the result
    print(f"You have lived for approximately {int(minutes_lived):} minutes.")

# Example usage
birthdate_str = "1990-05-15"  #  Replace with your birthday in the format YYYY-MM-DD minutes_lived(birthdate_str)