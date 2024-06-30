import { ReactNode } from "react";

export interface Iprops {
  type: AlertEnam | AlertType;
  icon: ReactNode;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

type AlertType =
  | "alert-default"
  | "alert-info"
  | "alert-warning"
  | "alert-error"
  | "alert-success";

export enum AlertEnam {
  def = "alert-default",
  info = "alert-info",
  warn = "alert-warning",
  err = "alert-error",
  succ = "alert-success",
}
