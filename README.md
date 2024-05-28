# Go Game API

## Description
This API calculates the maximum number of draws that could have occurred in a series of Go games played by three friends, given their points.

## Setup
Follow these steps to set up and run the project locally:

### Prerequisites
- Ensure you have Node.js and npm installed. You can download them from [Node.js](https://nodejs.org/)

### Installation and running
1. **Clone the repository: Run the followig code in your terminal**
  ```bash
   git clone https://github.com/anvithagowda098/go_game_api.git
  ```
2. **Navigate to the project directory:Run the followig code in your terminal**
  ```bash
  cd go-game-api
  ```
3. **Install dependencies:Run the followig code in your terminal**
  ```bash
  npm install
  ```
4. **Running the Server**
To start the server, run the following code in your terminal:
  ```bash
node index.js
  ```
You should see output indicating that the server is running:
Server running at http://localhost:3000/

## Endpoint and parameters
`GET /:p1/:p2/:p3`

- `p1`: Points of the first player (integer, 0-30, inclusive)
- `p2`: Points of the second player (integer, 0-30, inclusive)
- `p3`: Points of the third player (integer, 0-30, inclusive)
- `Response` 
  If the input is valid:
  ```json
  {
    "max_draws": <number of draws>
  }

#### Test Case 1: Basic Valid Input
**Input**: `/0/0/0`
**Expected Output**:
```json
{
  "max_draws": 0
}
```

#### Test Case 2: Simple Valid Input with Draws
**Input**: `/1/1/2`
**Expected Output**:
```json
{
  "max_draws": 2
}
```

#### Test Case 3: Valid Input with Draws
**Input**: `/3/4/5`
**Expected Output**:
```json
{
  "max_draws": 6
}
```