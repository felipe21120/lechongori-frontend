import type { NextApiRequest, NextApiResponse } from 'next';

const adminUser = {
  username: "felipe",
  password: "felipe1234" 
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    
    if (username === adminUser.username && password === adminUser.password) {
      
      return res.status(200).json({ success: "Login exitoso" });
    } else {
      
      return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
    }
  } else {
    
    res.setHeader('Allow', ['POST']);
  }
}