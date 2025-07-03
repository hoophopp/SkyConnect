const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const showPost = async (req, res) => {
  try {
    const userid = req.id;

    if (!userid) {
      return res.status(401).json({ message: "Unauthorized: No user ID found" });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userid
      },
      select: {
        username: true,
        moreinfo: {
          select: {
            imagurl: true
          }
        },
        post: {
          select: {
            title: true,
            content: true
          }
        }
      }
    });

    return res.json({ data: user });
  } catch (err) {
    console.error('Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = showPost;
