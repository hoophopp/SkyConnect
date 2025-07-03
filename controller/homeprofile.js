const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const showingprofile = async (req, res) => {
  try {
    const userId = req.user?.id; // from token middleware

    if (!userId) {
      return res.status(401).json({ message: "User ID not found" });
    }

    const profile = await prisma.user.findUnique({
      where: { id: userId }, // ✅ correct field name
      select: {
        username: true,
        email: true,
        moreinfo: {
          select: {
            bio: true,
            age: true,
            imagurl: true
          }
        }
      }
    });

    if (!profile) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ data: profile });

  } catch (err) {
    console.error("Error: ", err.message);
    return res.status(500).json({ error: err.message });
  }
};

module.exports = showingprofile;
