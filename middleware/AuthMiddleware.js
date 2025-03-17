const jwt = require("jsonwebtoken");
const Student = require("../models/Student.model");
const Institute = require("../models/Institute.model");


const protect=async(req,res)=>{
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            
            token = token.split(" ")[1];

           const decoded = jwt.verify(token, process.env.JWT_SECRET);
       
            req.user=decoded;
        
            next();
          
            
        } else {
            res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
    }
}

const protectStudent = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            
            token = token.split(" ")[1];

           const decoded = jwt.verify(token, process.env.JWT_SECRET);
         if(decoded.role==="Student"){ 


            req.user=decoded;
        
            next();}
            else{
            res.status(401).json({ message: "Not authorized " });
            }
        } else {
            res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
    }
};


const protectInstitute = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            
            token = token.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
         
           if(decoded.role==="Institute"){

               req.user=decoded;
           
               next();
           }
           else{
            res.status(401).json({ message: "Not authorized" });
           }

        } else {
            res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Not authorized, token failed" });
    }
};

const admin = (req, res, next) => {

 
    if (req.user && req.user.id === process.env.ADMIN_ID) {
        next();
    } else {
        res.status(403).json({ message: "Admin access required" });
    }
};

module.exports = {protect, protectStudent,protectInstitute, admin };