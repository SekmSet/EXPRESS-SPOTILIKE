const express = require("express");
const { sign_up, sign_in, delete_account, update_account, get_user_info} = require("../controller/user");
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await delete_account(id);

  if (!response.success) {
    return res.status(500).json({
      message: response.message,
      status: 500,
    });
  }

  res.status(200).json({
    message: response.message,
    status: 200,
  });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { username, password, email } = req.body;
  try {

    const response = await update_account({id, username, password, email});


    res.status(200).json({
      message: "User successfully updated 💚",
      result: response,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      result: error,
      status: 500,
    });
  }
});

router.get("/info", async (req, res) => {
  if (!req.headers.authorization) {
    res.json({
      "message": "UNAUTHORIZED ACCESS",
      "status": 404
    })
  }

  try {
    const response = await get_user_info();

    res.status(200).json({
      message: "Info user successfully getting 💚",
      result: response,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      result: error,
      status: 500,
    });
  }
});


module.exports = router;
