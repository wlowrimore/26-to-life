"use client";

import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import type { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import RequestFormOptions from "../ui/menus/RequestFormOptions";

const RequestForm = () => {
  const [uploadedImage, setUploadedImage] =
    useState<CloudinaryUploadWidgetInfo | null>(null);

  return (
    <main className="flex flex-col text-zinc-100">
      <form className="flex flex-col p-6 rounded shadow-md">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            id="name"
            name="name"
            className="bg-zinc-100/20 outline-none p-2 font-light tracking-wide text-sm"
            placeholder="Your full name"
            required
          />

          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            className="bg-zinc-100/20 outline-none p-2 font-light tracking-wide text-sm"
            placeholder="Your email address"
            required
          />

          {/* <label htmlFor="details">Project Details:</label> */}
          <textarea
            id="details"
            name="details"
            className="bg-zinc-100/20 outline-none p-2 font-light tracking-wide text-sm"
            placeholder="Describe your project in detail"
            rows={5}
            required
          ></textarea>
        </div>
        <div className="flex-1">
          <RequestFormOptions />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
      <section style={{ padding: "2rem" }}>
        <h1>Upload an Image</h1>

        <div
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            display: "inline-block",
          }}
        >
          <CldUploadButton
            uploadPreset="your_upload_preset"
            onSuccess={(result) => {
              if (result.info && typeof result.info !== "string") {
                setUploadedImage(result.info);
                console.log("Upload successful:", result.info);
              }
            }}
            onQueuesEnd={(result, { widget }) => {
              widget.close();
            }}
          >
            Upload Image
          </CldUploadButton>
        </div>

        {uploadedImage && (
          <div style={{ marginTop: "2rem" }}>
            <p>Upload successful!</p>
            <p>
              <strong>Public ID:</strong> {uploadedImage.public_id}
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default RequestForm;
