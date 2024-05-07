import React from "react";

export default function Blog() {
  return (
    <>
      <div class="row" data-masonry='{"percentPosition": true }'>
        <div class="col-sm-6 col-lg-4 mb-4" style={{ cursor: "pointer" }}>
          <Link to={"/write"} className="text-decoration-none">
            <div class="card text-bg-danger text-center p-3">
              <figure class="mb-0 text-decoration-none">
                <blockquote class="blockquote">
                  <h4>Blog</h4>
                </blockquote>
              </figure>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
