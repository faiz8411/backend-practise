const tools = [
  { id: 1, name: "hammer1" },
  { id: 2, name: "hammer2" },
  { id: 3, name: "hammer3" },
];

module.exports.getAllTools = (req, res) => {
  res.download(__dirname + "/tools.controller.js");
  const { limit, page } = req.query;
  // res.send("tools found");
  console.log(limit, page);
  res.json(tools.slice(0, limit));
};

module.exports.saveATool = (req, res) => {
  res.send("tools added");
};

module.exports.detailsTool = (req, res, next) => {
  const { id } = req.params;
  const toolFound = tools.find((tool) => tool.id == id);
  res.send(toolFound);
};
