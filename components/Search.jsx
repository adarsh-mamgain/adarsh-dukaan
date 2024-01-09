import Image from "next/image";

export default function Search() {
  return (
    <div className="bg-white">
      <div>
        <h1>Payments</h1>
        <span>How it works</span>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div>
        <div>
          <Image src="/Image.svg" width={39} height={39} alt="Image" />
        </div>
        <div>
          <Image src="/Image.svg" width={39} height={39} alt="Image" />
        </div>
      </div>
    </div>
  );
}
