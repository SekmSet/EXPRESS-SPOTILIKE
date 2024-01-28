const express = require("express");
const { sign_up, sign_in } = require("../controller/user");
const router = express.Router();

router.post("/sign", async (req, res) => {
  const { username, password, email } = req.body;
  const response = await sign_up({ username, password, email });

  res.json({
    message: "User successfully create 💚",
    result: response,
    status: 200,
  });
});

router.post("/auth", async (req, res) => {
  const { username, password } = req.body;
  const response = await sign_in({ username, password });

  if (response.success) {
    res.status(200).json({
      message: "User is now login 💚",
      result: response,
      status: 200,
    });
  } else {
    res.status(401).json({
      message: "Authentication failed",
      result: response,
      status: 401,
    });
  }
});

router.delete("/delete", async (req, res) => {
  const id = req.params.id;
  const response = await sign_in(id);

  res.json({
    message: "Account user is now delete 💔",
    // "result": response,
    status: 200,
  });
});

module.exports = router;
