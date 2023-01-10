import { useRef } from "react";

export function Dialog({ showDialog, onClose }) {
  const dialogEl = useRef(null);

  if (!showDialog) {
    if (dialogEl.current && dialogEl.current.hasAttribute("open")) {
      dialogEl.current.close();
    }
  }

  if (showDialog) {
    if (!dialogEl.current.hasAttribute("open")) {
      dialogEl.current.showModal();
    }
  }

  return (
    <dialog
      ref={dialogEl}
      className="backdrop:bg-neutral-800 backdrop:opacity-50 border"
    >
      <a href="#" onClick={onClose} className="absolute right-5">
        X
      </a>
      <form>
        <h4>Create something new</h4>
        <fieldset className="mt-6 mb-4">
          <legend>Choose what you want to create</legend>
          <label className="flex" htmlFor="repo">
            <input
              className="mr-3"
              type="radio"
              id="repo"
              name="new"
              value="repo"
            />
            New repository
          </label>
          <label className="flex" htmlFor="gist">
            <input
              className="mr-3"
              type="radio"
              id="gist"
              name="new"
              value="gist"
            />{" "}
            New gist
          </label>
          <label className="flex" htmlFor="org">
            <input
              className="mr-3"
              type="radio"
              id="org"
              name="new"
              value="org"
            />
            New organization
          </label>
        </fieldset>
        <div className="flex mt-4 justify-end">
          <button className="Btn" onClick={onClose}>
            Cancel
          </button>
          <button className="Btn BtnPrimary ml-4" type="submit">
            Create
          </button>
        </div>
      </form>
    </dialog>
  );
}
