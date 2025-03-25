export type Rules = {
  id?:string
  name:string,
  sections: RuleSection [];
}

export type RuleSection = {
  name:string,
  html:string
}