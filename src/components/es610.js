

const EsFeatures = () => {
    return (
        <div>
            <h1>ES 7,8,9,10 features</h1>
            <div>
                <h2>1. ES 7&8 Features:</h2>
                <ul>
                    <li>You can initialize the class properties outside of constructor</li>
                    <li>string.padEnd() and string.padStart() functions</li>
                    <li>Exponential Operator</li>
                    <li>Trailing comma</li>
                    <li>Object.values() and Object.entries()</li>
                    <li>array.prototype.includes() </li>
                    <li>Async Functions   - ES8</li>
                    <li>object.getOwnPropertyDescriptors()</li>
                </ul>
                <h2>2. ES 9 Features:</h2>
                <ul>
                    <li>RegEx changes</li> 
                    <li>Rest/Spread properties</li> 
                    <li>Asynchronous iteration
                        <pre>
                            {/* async function* foo() {
                                yield 1;
                                yield 2;
                            }
                            
                            (async function() {
                                for await (const num of foo()) {
                                console.log(num);
                                // expected output: 1
                            
                                break; // closes iterator, triggers return
                                }
                            })(); */}
                        </pre>
                    </li>
                </ul>
                <h2>3. ES10 Features</h2>
                <ul>
                    <li>Array.flat()</li>
                    <li>Array.flatmap()</li>
                    <li>object.fromentries()</li>
                    <li>String.trimstart() and String.trimend()</li>
                    <li>Optional catch binding</li>
                    <li>toString() - revised</li>
                    <li>sym.description</li>
                </ul>
                <p>https://www.cronj.com/blog/javascript-es7-es8-new-features/</p>
                <p>https://madasamy.medium.com/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4</p>
            </div>
        </div>
    )
}

export default EsFeatures