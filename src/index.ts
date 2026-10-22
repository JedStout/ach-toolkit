/** Every NACHA record is exactly this many characters wide. */
export const RECORD_LENGTH = 94;

/** Records are grouped into blocks of this many lines; short files are padded with `9` records. */
export const BLOCKING_FACTOR = 10;
