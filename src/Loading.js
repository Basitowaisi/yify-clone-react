import React from "react"

export default function Loading() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.9)",
        color: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1> Loading...</h1>
    </div>
  )
}
