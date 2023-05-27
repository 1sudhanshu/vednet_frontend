export interface notesState {
  id: number;
  isDeleted: boolean;
}
interface StickyType {
  notes: [] | notesState[];
}
export interface StickyReducerTypes {
  StickyReducer: StickyType;
}
