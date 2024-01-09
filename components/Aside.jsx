import Image from "next/image";

export default function Aside() {
  return (
    <div className="bg-[#1E2640] text-white/90">
      <nav>
        <div>
          <div>
            <Image src="/Image.svg" width={39} height={39} alt="Image" />
          </div>
          <div>
            <span>Nishyan</span>
            <a>Visit store</a>
          </div>
        </div>

        <div>
          <div>
            <div>
              <span>Home</span>
            </div>
            <div>
              <span>Orders</span>
            </div>
            <div>
              <span>Products</span>
            </div>
            <div>
              <span>Delivery</span>
            </div>
            <div>
              <span>Marketing</span>
            </div>
            <div>
              <span>Analytics</span>
            </div>
            <div>
              <span>Payments</span>
            </div>
            <div>
              <span>Tools</span>
            </div>
            <div>
              <span>Discounts</span>
            </div>
            <div>
              <span>Audience</span>
            </div>
            <div>
              <span>Appearance</span>
            </div>
            <div>
              <span>Plugins</span>
            </div>
          </div>
          <div>
            <div>
              <Image src="/Image.svg" width={39} height={39} alt="Image" />
              <div>
                <span>Available credits</span>
                <span>222.10</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
