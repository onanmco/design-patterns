import { RankedGame } from "./game-modes/RankedGame";
import { UnrankedGame } from "./game-modes/UnrankedGame";
import { CourtyardMap } from "./maps/CourtyardMap";
import { DesertMap } from "./maps/DesertMap";

const courtyardMap = new CourtyardMap();
const unrankedGameWithCourtyardMap = new UnrankedGame(courtyardMap);
unrankedGameWithCourtyardMap.startGame();

const desertMap = new DesertMap();
const rankedGameWithDesertMap = new RankedGame(desertMap);
rankedGameWithDesertMap.startGame();