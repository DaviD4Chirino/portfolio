// import React from "react";

export function formatTitle(string) {
  let result = string.toLowerCase();
  result = result.replace(/ /g, "_");
  result = result.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  result = result.replace(/\W/g, "");
  return result;
}
