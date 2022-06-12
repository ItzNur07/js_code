// find sumit 

const sentence = "Learn With Sumit is all about teaching web development skills and techniqes is an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most populer technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep into advanced topics using the latest best practices for you seasoned web developers.";

const matches = sentence.match(/sumit/gi);
console.log(matches.length);

console.log(sentence.search("Sumit"));