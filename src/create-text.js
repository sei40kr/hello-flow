/* @flow */

type Comment = {
  author: string,
  text: string
};

const comment: Comment = {
  author: "sai",
  text: "hello, world!"
};

function createText(comment: Comment): string {
  return comment.author + " says " + comment.text;
}

console.log(createText(comment));
