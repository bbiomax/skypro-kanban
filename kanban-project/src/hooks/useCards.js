import { useContext } from "react";
import { CardsContext } from "../contexts/cards";

export function useCards() {
  return useContext(CardsContext);
}
