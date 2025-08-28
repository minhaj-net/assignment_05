1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   agula sob e DOM (Document Object Model) থেকে element খুঁজে বের করার জন্য ব্যবহার হয়।
   তবে আলাদা আলাদা কাজ করে।
   1.getElementById
   শুধু একটা element খুঁজে pawa jai যেটার id দেওয়া আছে।
   সরাসরি element object রিটার্ন করে
   যদি ওই id না থাকে null রিটার্ন করবে।
   সবচেয়ে ফাস্ট কাজ করে, কারণ id সবসময় ইউনিক হয়

   2.getElementsByClassName
   একসাথে অনেকগুলো element খুঁজে আনে যেগুলোর class একই।
   আলাদা element নিতে হলে index ব্যবহার করতে হয় jemon ([0], [1] ইত্যাদি)।
   এটা live থাকে → DOM এ কিছু add/remove করলে সাথে সাথে update hoi।

   3.querySelector
   এখানে CSS selector ব্যবহার করা যায় (যেমন: .class, #id, div > p ইত্যাদি)।
   শুধু প্রথম মিলে যাওয়া element রিটার্ন করে।

   4. querySelectorAll
      অনেক element লাগলে আর CSS selector ব্যবহার করতে চাইলে querySelectorAll ব্যবহার করো।  
       এটা সব element নিয়ে আসবে, শুধু প্রথমটা না।
      ফলাফল NodeList আকারে আসবে, যেটার উপর loop চালানো যাবে।

2. How do you create and insert a new element into the DOM?
   1.document.createElement("div") diye .Notun akta element ke create korbo 2.
   2.নতুন element-এর ভেতরে লেখা, ছবি, বা অন্য কোনো কনটেন্ট যোগ করা যায় এবং element-এ class, id বা style-ও দেওয়া যায়।
   3.Parent element নির্বাচন করা , যেমন getElementById অথবা অন্য কোনো DOM selection methods দিয়ে নির্বাচন করা
   3.DOM-এ যুক্ত করা যেমন ,parent element-এর ভেতরে নতুন element-টাকে ঢুকিয়ে দেওয়া হয়

3. What is Event Bubbling and how does it work?
   ইভেন্ট বাবলিং হলো জাভাস্ক্রিপ্টে একটি প্রক্রিয়া যেখানে কোনো element-এ ইভেন্ট (যেমন click, mouseover) ঘটে এবং সেই ইভেন্টটি ধাপে ধাপে parent element-এর দিকে "উপরে উঠে" যায়। সহজভাবে বললে, যখন তুমি কোনো ছোট element-এ click করো, সেই ইভেন্ট প্রথমে সেই element-এ ধরা পড়ে, তারপর ধাপে ধাপে উপরের parent element-গুলোর মধ্যে ছড়িয়ে যায়।

   এটি যেভাবে কাজ করে ;
   1.একটি button-এর ভিতরে click করলে ,সেই click ইভেন্ট প্রথমে button element-এ active হয়।
   2.এরপর সেই ইভেন্ট সেই button-এর parent element-এ চলে যায়।
   3.তারপর parent-এর parent element-এ চলে যায়।
   4.এইভাবে ইভেন্ট সব উপরের level-এর element-এ পৌঁছানো পর্যন্ত চলে যায়।

4. What is Event Delegation in JavaScript? Why is it useful?
   Event Delegation in JavaScript হলো এমন একটি টেকনিক, যেখানে আমরা প্রতিটি child element-এর জন্য আলাদা event listener বসানোর পরিবর্তে তাদের parent element-এর উপর একটি event listener বসাই। তারপর event bubbling-এর মাধ্যমে কোন child element-এ event ঘটেছে সেটা detect করে কাজ করি।

   এটা useful কারণ—
   1.এতে কোড ছোট এবং maintainable হয়।
   2.অনেক child element থাকলেও performance ভালো থাকে।
   3.Dynamically নতুন element যোগ হলে সেটার উপরেও event কাজ করবে, extra কিছু করতে হয় না।

5. What is the difference between preventDefault() and stopPropagation() methods?

   preventDefault() → এই মেথড কোনো element-এর default behavior বন্ধ করে দেয়।
   যেমন, form-এর submit button চাপলে সাধারণত পেজ reload হয়। কিন্তু preventDefault() ব্যবহার করলে সেই reload আর হবে না।

   stopPropagation() → এই মেথড event bubbling বা event capturing বন্ধ করে দেয়।
   মানে হলো, event টা parent element-এ আর উপরে propagate হবে না।
