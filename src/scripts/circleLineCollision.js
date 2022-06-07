const circleLineCollision = (A, B, C, r) => {
    const slope = (B.y - A.y) / (B.x - A.x)
    const orthogonal = -1 / slope
    const t = (slope * C.x - slope * A.x + A.y - C.y) / (orthogonal - slope)
    const D = { x: C.x + t, y: C.y + orthogonal * t }
    if((B.x - A.x) == 0 && isNaN(t)){
        D.x = A.x
        D.y = C.y
    } else if(isNaN(D.y)){
        D.y = A.y
    }
    const AB = { x: B.x - A.x, y: B.y - A.y }
    const AD = { x: D.x - A.x, y: D.y - A.y }
    const p = (!(AD.x == 0 && AB.x == 0) && AB.x != 0) ? AD.x / AB.x : AD.y / AB.y

    let distanceFromCenterSquared
    if(p >= 0 && p <= 1){
      const CD = { x: D.x - C.x, y: D.y - C.y }
      distanceFromCenterSquared = CD.x * CD.x + CD.y * CD.y
    } else {
      const AC = { x: C.x - A.x, y: C.y - A.y }
      const BC = { x: C.x - B.x, y: C.y - B.y }
      const acDistanceSquared = AC.x * AC.x + AC.y * AC.y
      const bcDistanceSquared = BC.x * BC.x + BC.y * BC.y
      distanceFromCenterSquared = Math.min(acDistanceSquared, bcDistanceSquared)
    }

    const distanceSquared = distanceFromCenterSquared - r * r

    return {
        collision: distanceSquared <= 0,
        distanceSquared
    }
}

export default circleLineCollision