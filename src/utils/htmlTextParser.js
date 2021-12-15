const parse = (string) => {
  const parser = new DOMParser();
  return parser.parseFromString(string, "text/html").body.textContent;
};

export default parse;
