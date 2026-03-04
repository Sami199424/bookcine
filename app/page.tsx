export default function Home() {
  return (
    <div style={{padding:40,fontFamily:"Arial"}}>
      <h1>BookCine</h1>
      <p>Upload a PDF book and extract text.</p>

      <form action="/api/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file"/>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
