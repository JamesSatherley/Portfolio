import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillGitlab,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { IconButton } from "jrs-lib";

import "./Body.scss";
import Pic from "../../assets/imgs/circle.png";
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

const Body = ({ darkMode, isMobile }) => {
  const gaEventTracker = useAnalyticsEventTracker("Body");
  return (
    <div className="bodyHolder">
      <h1
        className="name"
        style={{
          color: darkMode ? "rgb(45 212 191 / 1)" : "rgb(20 150 120 / 1)",
        }}
      >
        James Satherley
      </h1>
      <h1
        className="job"
        style={{
          color: darkMode ? "rgb(255 255 255 / 1)" : "rgb(15 15 15 / 1)",
        }}
      >
        Software Engineer
      </h1>
      <h1
        className="blurb"
        style={{
          color: darkMode ? "rgb(229 231 235 / 1)" : "rgb(30 30 30 / 1)",
        }}
      >
        I want to work with you. Contact me below!
      </h1>
      {!isMobile && (
        <div
          className="iconBox"
          style={{
            color: darkMode ? "rgb(156 163 175 / 1)" : "rgb(75 75 75 / 1)",
          }}
        >
          <IconButton
            type="button"
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("twitter click");
              window.open("https://twitter.com/jamessatherley");
            }}
            icon={AiFillTwitterCircle}
          />
          <AiFillLinkedin
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("linked in click");
              window.open("https://www.linkedin.com/in/jamessatherley/");
            }}
          />
          <AiFillGithub
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("github click");
              window.open("https://github.com/JamesSatherley");
            }}
          />
          <AiFillGitlab
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("gitlab click");
              window.open("https://gitlab.com/JamesSatherley");
            }}
          />
          <AiFillMail
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("mail click");
              window.open("mailto:contact@james.org.nz");
            }}
          />
          <AiFillPhone
            className={darkMode ? "bodyIcon" : "bodyIconDark"}
            onClick={() => {
              gaEventTracker("phone click");
              window.open("tel:0225457881");
            }}
          />
        </div>
      )}
      {isMobile && (
        <>
          <div
            className="iconBox"
            style={{
              color: darkMode ? "rgb(156 163 175 / 1)" : "rgb(75 75 75 / 1)",
            }}
          >
            <AiFillTwitterCircle
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("twitter click mobile");
                window.open("https://twitter.com/jamessatherley");
              }}
            />
            <AiFillLinkedin
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("linked in click mobile");
                window.open("https://www.linkedin.com/in/jamessatherley/");
              }}
            />
            <AiFillGithub
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("github click mobile");
                window.open("https://github.com/JamesSatherley");
              }}
            />
          </div>
          <div
            className="iconBox"
            style={{
              color: darkMode ? "rgb(156 163 175 / 1)" : "rgb(75 75 75 / 1)",
            }}
          >
            <AiFillGitlab
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("gitlab click mobile");
                window.open("https://gitlab.com/JamesSatherley");
              }}
            />
            <AiFillMail
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("mail click mobile");
                window.open("mailto:contact@james.org.nz");
              }}
            />
            <AiFillPhone
              className={darkMode ? "bodyIcon" : "bodyIconDark"}
              onClick={() => {
                gaEventTracker("phone click mobile");
                window.open("tel:0225457881");
              }}
            />
          </div>
        </>
      )}
      <img
        className="pic"
        src={Pic}
        alt="developer"
        style={{
          border: `solid 5px ${
            darkMode ? "rgb(229 231 235 / 1)" : "rgb(30 30 30 / 1)"
          }`,
          width: isMobile ? "12rem" : "24rem",
          height: isMobile ? "18rem" : "24rem",
        }}
      />
    </div>
  );
};

export default Body;
