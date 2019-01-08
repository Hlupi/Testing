import React from "react";
import { shallow } from "enzyme";
import App from "components/app";
import CommentBox from "components/comment-box";
import CommentList from "components/comment-list";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a CommentBox component", () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a CommentList component", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
