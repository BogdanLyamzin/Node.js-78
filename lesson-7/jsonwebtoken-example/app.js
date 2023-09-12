import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET } = process.env;

const payload = {
    id: "6500a0c0b3ea37cd020cd106"
};

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
// console.log(token);
const decodeToken = jwt.decode(token);
// console.log(decodeToken)

try {
    const { id } = jwt.verify(token, JWT_SECRET);
    // console.log(id)
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDBhMGMwYjNlYTM3Y2QwMjBjZDEwNiIsImlhdCI6MTY5NDU0MTY3MSwiZXhwIjoxNjk0NjI0NDcxfQ.5n4sm3GIAV8FpHIz_SrMKhOFPVfJ0lR2Vdv5c2rBMYf";
    jwt.verify(invalidToken, JWT_SECRET);
}
catch (error) {
    console.log(error.message);
}