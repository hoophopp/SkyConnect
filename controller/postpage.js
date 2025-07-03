const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const post = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Please enter both title and content." });
  }

  try {
    const userid = req.id;
    if (!userid) {
      return res.status(401).json({ message: "Authorization failed" });
    }

    const newpost = await prisma.post.create({
      data: {
        title,
        content,
        userId: userid // ✅ make sure post belongs to a user
      }
    });

    return res.status(201).json({ data: newpost });

  } catch (err) {
    console.log('Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = post;
