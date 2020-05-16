/*
recursive function that will help you find a possible exit though the maze (there is more than one)

ex:

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']


The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array).
The starting point is the top left corner and the exit is indicated by e.
For simplicity purpose, use the bottom right corner of the maze as the exit.
You can't go outside the boundaries of the maze.
The maze has passages that are blocked and you can't go through them.
These blocked passages are indicated by *.
Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.
For the above maze, a possible exit path can be RRDDLLDDRRRRRR

then find All the possible exit paths through the Maze.


What is the input to the program?
  maze
What is the output of the program?
  exit path/all exit paths
What is the input to each recursive call?
  maze + path
What is the output of each recursive call?
  path
*/


function mazeSolver(maze){
  let mazeX = maze.length;
  let mazeY = maze[0].length
  let solution = new Array(mazeX);
  //loop thorugh x + y axes
  for(i = 0; i < mazeX; i++){
    solution[i] = new Array(mazeY);
    for(j = 0; j < mazeY; j++){
      solution[i][j] = '-';
    }
  }
  return solveMaze(maze, 0, 0, solution);
}

// all solutions
function solveMaze(maze, x, y, sol, path = ''){
  if(x === maze.length - 1 && y === maze[0].length - 1){
    sol[x][y] = 1;
    console.log(path);
    console.log(sol);
    return path;
  }

  if(isSafe(maze, x, y)){
    sol[x][y] = 1;

    if(solveMaze(maze, x + 1, y, sol, path + 'D')){
      return true;
    } else if(solveMaze(maze, x, y + 1, sol, path + 'R')){
      return true;
    } else if(solveMaze(maze, x - 1, y, sol, path + 'U')){
      return true;
    } else if(solveMaze(maze, x, y - 1, sol, path + 'L')){
      return true;
    } else  {
      sol[x][y] = 0;
      return false;
    }
  }

  return false
}

function isSafe(maze, x, y) {
  return (x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] !== '*') ? true : false
}
