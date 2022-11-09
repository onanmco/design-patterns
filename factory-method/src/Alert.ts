import { Severity } from "./Severity";

export type Alert = {
  severity: Severity;
  details: string;
};