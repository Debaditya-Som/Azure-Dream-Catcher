import random
import pandas as pd

# Simulate sleep data
def generate_sleep_data(days):
    data = []
    for day in range(days):
        sleep_duration = round(random.uniform(5, 8), 2)
        rem_sleep = round(random.uniform(10, 30), 2)
        heart_rate = random.randint(60, 80)

        # Define the Sleep Quality based on thresholds
        if sleep_duration >= 7 and rem_sleep >= 20 and heart_rate <= 70:
            sleep_quality = "Good"
        else:
            sleep_quality = "Poor"
        
        data.append({
            "Date": f"2024-11-{day + 1}",
            "Sleep Duration (hours)": sleep_duration,
            "REM Sleep (%)": rem_sleep,
            "Heart Rate (bpm)": heart_rate,
            "Sleep Quality": sleep_quality
        })
    return pd.DataFrame(data)

# Generate sleep data for 50 days
sleep_data = generate_sleep_data(100)

# Save the data to a CSV file
sleep_data.to_csv("sleep_data_with_labels.csv", index=False)

# Print the generated data
print(sleep_data)
