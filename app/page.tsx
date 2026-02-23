export default function Home() {
  return (
    <>
      <h1>Start coding</h1>
      <h2>Select your programming Language</h2>
      <select>
        <option>Java</option>
        <option>Javasript</option>
        <option>Python</option>
        <option>C</option>
        <option>C++</option>
        <option>PHP</option>
      </select>
      <form>
        <textarea name="textarea" rows={30} cols={60}>
          Paste your code here
        </textarea>
        <button>Submit</button>
      </form>
      <h2>By using Github </h2>
      <form>
        <textarea name="textarea" rows={1} cols={30}>
          Paste your github repository
        </textarea>
      </form>
    </>
  );
}
