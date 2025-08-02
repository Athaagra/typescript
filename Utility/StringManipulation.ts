// Uppercase <StringType>
// Lowercase <StringType>
// Capitalize <StringType>
// Uncapitalize<StringType>

type City = "new york" | "London" | "tokyo"; 
type UppercaseCity = Uppercase<City>;
type LowercaseCity = Lowercase<City>;
type Capitalize = Capitalize<City>;
type UnccapitalizeCity = Uncapitalize<City>;
