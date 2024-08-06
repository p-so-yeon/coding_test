function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;

  let x, y;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === "S") {
        x = i;
        y = j;
        break;
      }
    }
  }

  for (const route of routes) {
    const [direction, distanceStr] = route.split(" ");
    const distance = parseInt(distanceStr, 10);

    let valid = true;

    if (direction === "N") {
      for (let step = 1; step <= distance; step++) {
        const newX = x - step;
        const newY = y;
        if (!isValidPosition(newX, newY, H, W) || park[newX][newY] === "X") {
          valid = false;
          break;
        }
      }
      if (valid) x -= distance;
    } else if (direction === "S") {
      for (let step = 1; step <= distance; step++) {
        const newX = x + step;
        const newY = y;
        if (!isValidPosition(newX, newY, H, W) || park[newX][newY] === "X") {
          valid = false;
          break;
        }
      }
      if (valid) x += distance;
    } else if (direction === "E") {
      for (let step = 1; step <= distance; step++) {
        const newX = x;
        const newY = y + step;
        if (!isValidPosition(newX, newY, H, W) || park[newX][newY] === "X") {
          valid = false;
          break;
        }
      }
      if (valid) y += distance;
    } else if (direction === "W") {
      for (let step = 1; step <= distance; step++) {
        const newX = x;
        const newY = y - step;
        if (!isValidPosition(newX, newY, H, W) || park[newX][newY] === "X") {
          valid = false;
          break;
        }
      }
      if (valid) y -= distance;
    }
  }

  return [x, y];
}

function isValidPosition(x, y, H, W) {
  return x >= 0 && x < H && y >= 0 && y < W;
}
