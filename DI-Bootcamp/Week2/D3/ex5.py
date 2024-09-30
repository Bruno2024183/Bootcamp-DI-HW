import datetime

def time_until_january_first():
    # Get the current date and time
    now = datetime.datetime.now()

    # Define the date and time for January 1st of the next year
    current_year = now.year
    next_year = current_year + 1
    january_first = datetime.datetime(next_year, 1, 1)

    # Calculate the time difference
    time_left = january_first - now

    # Display the time left in days, hours, minutes, and seconds
    days = time_left.days
    hours, remainder = divmod(time_left.seconds, 3600)
    hours, remainder = divmod(time_left.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    print(f"The 1st of January is in {days} days and {hours:02}:{minutes:02}:{seconds:02} hours")

# Example usage
time_until_january_first()