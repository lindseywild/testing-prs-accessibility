import "./Dialog.css";

export function Dialog({ showDialog }) {
  return (
    <dialog className="backdrop:bg-gray-50" open={showDialog}>
      <button>X</button>
      <form method="dialog">
        <h2>Create something new</h2>
        <fieldset>
          <legend>Choose what you want to create</legend>
        </fieldset>
        <label htmlFor="repo">
          New repository{" "}
          <input type="radio" id="repo" name="new" value="repo" />
        </label>
        <label htmlFor="gist">
          New gist <input type="radio" id="gist" name="new" value="gist" />
        </label>
        <label htmlFor="org">
          New organization{" "}
          <input type="radio" id="org" name="new" value="org" />
        </label>
        <button>Cancel</button>
        <button type="submit">Create</button>
      </form>
    </dialog>
  );
}
