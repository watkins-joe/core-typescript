import { MeetingResource } from "../../03 - Generic Functions/files/models/meetingResource";
import {
    ConferenceRoom,
  conferenceRoomData,
} from "../../03 - Generic Functions/files/models/conferenceRoom";
import {
  PartyTent,
  partyTentData,
} from "../../03 - Generic Functions/files/models/partyTent";
import {
  Building,
  buildingData,
} from "../../03 - Generic Functions/files/models/building";

function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
  let bigRooms: Array<T> = [];

  rooms.forEach((r) => {
    if (r.capacity > minSize) {
      bigRooms.push(r);
    }
  });

  return bigRooms;
}

let bigRooms = getBigRooms(conferenceRoomData, 20);

console.log(bigRooms);

// function shortenArray<T>(data: Array<T>, amountToShorten: number) {
//   return data.splice(amountToShorten, data.length);
// }

// let stringArray: string[] = ["Visual Basic", "C++", "TypeScript", "JavaScript"];

// let fewerLanguages = shortenArray([1, 2, 3], 2);

// console.log(fewerLanguages);
