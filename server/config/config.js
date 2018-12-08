var env = process.env.NODE_ENV  || 'development';
// see https://www.udemy.com/the-complete-nodejs-developer-course-2/learn/v4/t/lecture/5677904?start=0
console.log('env ****', env);

if (env === 'development') {
    process.env.PORT = '3000';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = '3000';
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}