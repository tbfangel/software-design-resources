# Rust Language

> Part of the [Armin Ronacher overview](overview.md)

Armin Ronacher has been writing about Rust since 2012, when he noticed its elegant semicolon semantics, and has documented a 12-year journey from early adopter through deep production use building MiniJinja (a full Jinja2-compatible template engine in Rust). This cluster covers his entire arc: first impressions, error handling patterns, type system deep-dives, unsafe memory, the Rust `Any` trait series, macro-based vtables, and the ongoing tension between Rust's safety guarantees and the ergonomics of writing complex low-level code. His posts are characterised by working code, honest frustration with language limitations, and careful analysis of the design trade-offs behind Rust's choices.

## Key Insights

**The borrow checker is a technical debt prevention device.** Ronacher's clearest framing: Rust prevents you from building up "some of the worst technical debt you can acquire, the kind of debt which you can never repay." The short-term frustration of fighting the borrow checker is the cost of avoiding entire categories of long-term maintenance disasters.

**Unsafe Rust has become too hard even for experts.** A dedicated series on this finding: the rules around uninitialized memory (`MaybeUninit`, `addr_of_mut!`, `write()` vs assignment) have become complex enough that experienced programmers make mistakes. The compiler is not helpful in pointing out errors in unsafe code. This undermines one of Rust's key value propositions — C-interoperability and safe performance-critical code — by making the necessary unsafe path difficult to walk correctly.

**Rust's type system limits are real but often workable.** Multiple posts document cases where Rust "tells you that you cannot" do something but you actually can — via custom vtables, the `Any` trait, stack tokens, and other patterns. The workarounds are sometimes fragile (depending on unspecified behaviour) or complex (macro-generated trampolines), but they exist. The correct response to a Rust type system rejection is often "redesign the API, not the feature."

**Error handling design is an API design problem.** The evolution from `try!` to `?`, from ad-hoc error types to `FromError` and eventually `thiserror`/`anyhow`, is documented in real time. The core insight: error types are part of your API contract, and the design decision of how much information to surface versus how much to hide is a genuine trade-off with no universal answer.

**Rust is a unique position in the language space.** Ronacher identifies Rust as the only language combining Python-level expressiveness, C-level performance, memory safety, and serious systems capabilities. Its Cargo toolchain and documentation quality make real-world development more pleasant than C++ despite the learning curve.

---

### [Rust Any Part 3: Finally we have Upcasts](https://lucumr.pocoo.org/2025/3/27/any-upcast/)
**Type:** Article
**Date:** 2025-03
**Tags/Topics:** Rust, Any trait, upcasting, Rust 1.86, trait objects

Rust 1.86 finally adds support for upcasting to supertraits, fixing a three-year limitation in the `Any` trait. Previously, traits inheriting from `Any` (e.g., `trait DebugAny: Any + Debug`) could not be directly cast to `&dyn Any` to use downcasting methods. The fix means the `As-Any Hack` from 2022 is no longer needed. Developers can now cast `dyn DebugAny` directly to `&dyn Any` and call `downcast_ref`. Adoption depends on raising Minimum Supported Rust Version.

**Key takeaways:**
- Rust 1.86 resolves the supertrait upcast limitation that required the As-Any workaround for three years.
- Extension map patterns using `Any` are now cleaner and require less boilerplate.
- MSRV constraints mean adoption will be gradual for libraries with broad compatibility requirements.

---

### [Bridging the Efficiency Gap Between FromStr and String](https://lucumr.pocoo.org/2025/3/23/from-string/)
**Type:** Article
**Date:** 2025-03
**Tags/Topics:** Rust, FromStr, String, zero-copy, transmute, trait design

Ronacher proposes a `FromString` trait that accepts owned `String` values rather than `&str`, addressing the inefficiency of `FromStr` which forces unnecessary clones when your input is already a `String`. The implementation uses `transmute_copy` (not `transmute`, because generic types have unknown sizes at compile time) with `TypeId` comparison to detect String-to-String identity and achieve zero-copy optimisation. A blanket implementation for all `FromStr` types makes the new trait a strict superset.

**Key takeaways:**
- `FromStr` forces a clone when you have an owned `String`; a `FromString` trait eliminates this.
- `transmute_copy` with `TypeId` comparison provides zero-copy identity conversion for same-type conversions.
- Small trait design decisions around owned vs borrowed inputs have measurable performance consequences.

---

### [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](https://lucumr.pocoo.org/2025/2/4/fat-rand/)
**Type:** Article
**Date:** 2025-02
**Tags/Topics:** Rust, rand crate, dependencies, compilation overhead, auditability

Ronacher critiques the `rand` crate for dependency bloat: v0.9.0 pulls in 29 vendored crates totaling 62 MB and 209,150 lines of code, takes 4.3 seconds to compile on an M1 Max, and produces 36 MB of compiler artifacts. The dependency chain (proc-macros, `zerocopy`, platform-specific code) pulls in Windows target code for a single API call. Rust's standard library already provides random seeding via its hasher, and minimal alternatives like `fastrand` exist with zero dependencies. "Almost standard crates" should prioritise auditability.

**Key takeaways:**
- Popular crates with large dependency trees are harder to audit and create unnecessary attack surface.
- Compilation overhead from dependency bloat is real and measurable: 4.3 seconds for random numbers.
- Widely-used "standard" crates have a responsibility to minimise their dependency footprint.

---

### [MiniJinja: Learnings from Building a Template Engine in Rust](https://lucumr.pocoo.org/2024/8/27/minijinja/)
**Type:** Article
**Date:** 2024-08
**Tags/Topics:** Rust, MiniJinja, template engine, Value enum, vtables, stack-based VM

Ronacher describes the architecture of MiniJinja, a Rust implementation of Jinja2. Key design choices: `Value` enum with reference counting for the runtime object model (avoiding unsafe NaN tagging); a trait-based object protocol supporting value retrieval, enumeration, and method calls; a stack-based bytecode VM with macros using reference IDs to manage lifetimes; and a sophisticated `add_filter` API using traits to accept functions with varied signatures and automatic type conversion. The post is both a technical retrospective and an education in building runtime systems in Rust.

**Key takeaways:**
- Reference counting with a `Value` enum is a practical object model for Rust template engines without requiring unsafe.
- Stack-based VMs with reference IDs for macros elegantly manage Rust's lifetime constraints.
- Trait-based filter APIs can unify functions with different signatures through automatic type conversion.

---

### [Using Rust Macros for Custom VTables](https://lucumr.pocoo.org/2024/5/16/macro-vtable-magic/)
**Type:** Article
**Date:** 2024-05
**Tags/Topics:** Rust, macros, vtables, dynamic dispatch, reference counting, unsafe

Ronacher shows that Rust's object-safety rules can be circumvented through manually constructed vtables using macros. When traits require `&Arc<Self>` receivers — preventing object safety — a `type_erase!` macro can generate custom fat pointers with trampolines that manage reference counting through vtable entries. The result is a `DynObject` type with a raw pointer to Arc-wrapped data and a hidden `VTable` struct with function pointers. "Just because Rust tells you that you cannot make something into an object does not mean you actually can't."

**Key takeaways:**
- Custom vtables via macros bypass Rust's object-safety rules when traits need reference-counted receivers.
- Macro-generated unsafe boilerplate is safer than hand-written equivalents for repetitive patterns.
- Compile-time introspection (as in Zig) would make this pattern cleaner; Rust's macro system requires more ceremony.

---

### [On Tech Debt: My Rust Library is now a CDO](https://lucumr.pocoo.org/2024/3/26/rust-cdo/)
**Type:** Article
**Date:** 2024-03
**Tags/Topics:** Rust, tech debt, API evolution, MiniJinja, humour

A satirical treatment of how MiniJinja's API has accumulated layers of "financial engineering" — wrapper types, re-exports, trait aliases, and compatibility shims — that obscure the underlying architecture. The CDO metaphor (collateralised debt obligation) captures how each layer of abstraction made sense individually but the composition has become opaque. Serious underlying point: API design debt in Rust accumulates differently than in dynamic languages because type changes ripple through the entire dependency graph.

**Key takeaways:**
- API design debt in Rust is particularly costly because type changes require recompilation across the dependency graph.
- Each abstraction layer that seems reasonable in isolation can compound into architectural opacity.
- Humour is an effective way to discuss technical debt that the author created themselves.

---

### [A Better Way to Borrow in Rust: Stack Tokens](https://lucumr.pocoo.org/2022/11/23/stack-tokens/)
**Type:** Article
**Date:** 2022-11
**Tags/Topics:** Rust, lifetimes, stack tokens, thread-locals, borrow checker, soundness

Ronacher proposes stack tokens — zero-sized types constructable only via a macro on the stack — as a solution to the "rightward drift" problem with thread-locals. Thread-local `with()` APIs require nested closures to prevent lifetime leakage to `'static`. Stack tokens work because "any function that receives a `&StackToken` can be assured that this has a lifetime constrained to a stack frame." The proposal enables cleaner APIs for types like `Sticky<T>`. Caveat: soundness remains unclear and depends on assumptions about stack-to-thread relationships not formally specified in Rust's semantics.

**Key takeaways:**
- Stack tokens enable cleaner APIs for types that need lifetime-bounded access without nested closures.
- The proposal depends on informal assumptions about stack lifetimes; formal soundness is unproven.
- Rust's designers must choose: validate stack tokens or declare competing approaches unsound — not both.

---

### [You Can't Do That: Abstracting over Ownership in Rust with Higher-Rank Type Bounds](https://lucumr.pocoo.org/2022/9/11/abstracting-over-ownership/)
**Type:** Article
**Date:** 2022-09
**Tags/Topics:** Rust, HRTBs, ownership abstraction, type system limits, closures

Ronacher documents a fundamental limitation: creating APIs that transparently handle both `&str` and `String` breaks down when higher-ranked trait bounds (HRTBs) are involved. The compiler error "implementation of TryConvertValue is not general enough" reflects a genuine type-theoretic constraint: `for<'a> TryConvertValue<'a>` must work for all lifetimes, but `&'a str` is tied to specific lifetimes. A workaround using associated types instead of lifetime parameters exists but is fragile and version-dependent. Developers should avoid designing APIs that abstract over borrowing status when functions are involved.

**Key takeaways:**
- Abstracting over both `&str` and `String` in function APIs is not cleanly expressible in current Rust.
- HRTBs and lifetime-parametric types interact in ways that produce obscure compiler errors with fragile fixes.
- The correct response is often to redesign the API to avoid the abstraction rather than find a workaround.

---

### [Uninitialized Memory: Unsafe Rust is Too Hard](https://lucumr.pocoo.org/2022/1/30/unsafe-rust/)
**Type:** Article
**Date:** 2022-01
**Tags/Topics:** Rust, unsafe, MaybeUninit, uninitialized memory, ergonomics

Ronacher argues that writing unsafe Rust has become unnecessarily difficult compared to C/C++. Initializing a simple struct requires understanding nuanced distinctions between `mem::zeroed()`, `MaybeUninit`, `addr_of_mut!`, and when to use `write()` vs assignment. The rules changed over time as the understanding of safety evolved. The compiler is not helpful in pointing out when unsafe code is wrong. Even after writing the article, expert corrections were required — illustrating how easily unsafe rules are misinterpreted by experienced practitioners.

**Key takeaways:**
- Unsafe Rust's rules around uninitialized memory have become too complex for confident use by experienced programmers.
- The compiler provides minimal guidance when unsafe code is wrong, making mistakes easy to miss.
- This complexity undermines Rust's C-interoperability value proposition by making the unsafe path difficult.

---

### [Rust Any Part 2: As-Any Hack](https://lucumr.pocoo.org/2022/1/7/as-any-hack/)
**Type:** Article
**Date:** 2022-01
**Tags/Topics:** Rust, Any trait, downcasting, Debug, trait objects, extension maps

Ronacher demonstrates the As-Any hack: a workaround for Rust's limitation that you cannot create `Box<dyn Any + Debug>` because only one non-auto trait is allowed in a trait object. The solution creates a custom supertrait inheriting from both `Any` and `Debug`, adds `as_any()` and `as_any_mut()` methods for upcasting, and builds a debuggable extension map on top. Note: this hack was superseded by Rust 1.86's upcast support (covered in Part 3).

**Key takeaways:**
- Supertrait + `as_any()` pattern enables downcasting for trait objects that combine `Any` with other traits.
- TypeId storage alongside trait object references enables human-readable debug output in extension maps.
- This workaround is no longer needed in Rust 1.86+, but remains relevant for lower MSRV targets.

---

### [Rust Any Part 1: Extension Maps in Rust](https://lucumr.pocoo.org/2022/1/6/rust-extension-map/)
**Type:** Article
**Date:** 2022-01
**Tags/Topics:** Rust, Any trait, extension maps, type erasure, interior mutability

Ronacher introduces the extension map pattern: using Rust's `Any` trait to store arbitrary `'static` types in a `HashMap<TypeId, Box<dyn Any>>`, avoiding the need for generic type parameters that would make APIs like `App<Config>` unwieldy. Three variants are presented: a basic version (potential panics on missing values), a `RefCell` variant (interior mutability without mutable references), and a `parking_lot` RwLock variant for thread-safe concurrent applications.

**Key takeaways:**
- Extension maps with `TypeId` keys replace unwieldy generic type parameters with runtime flexibility.
- Interior mutability (`RefCell`, `RwLock`) resolves borrow checker friction in extension map access patterns.
- Thread safety requires `Send + Sync` bounds and `RwLock` instead of `RefCell`.

---

### [Rust Adventures: Abusing Serde](https://lucumr.pocoo.org/2021/11/14/abusing-serde/)
**Type:** Article
**Date:** 2021-11
**Tags/Topics:** Rust, Serde, reflection, template engines, MiniJinja, thread-local hacks

Ronacher documents three creative uses of Serde beyond its intended purpose: using serialisation as a reflection mechanism to expose Rust structs to template engines (MiniJinja); passing out-of-band data through thread-local storage with in-band handle references to work around Serde's data model limitations; and inter-process communication passing file descriptors. These techniques are powerful but rely on fragile mechanisms. He advocates a hypothetical "serde 2.0" with better extension support.

**Key takeaways:**
- Serde's `Serialize` trait can function as a reflection mechanism to expose struct fields to dynamic systems.
- Thread-local storage + in-band handles is a fragile but effective workaround for Serde data model limits.
- The pattern is educational but production use requires careful handling of the fragility.

---

### [How to WASM DWARF](https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/)
**Type:** Article
**Date:** 2020-11
**Tags/Topics:** WebAssembly, DWARF, debugging, Sentry, wasm-bindgen

Ronacher explains why DWARF (not source maps) is the right debugging format for WebAssembly: source maps work for minified JavaScript but fail for WASM's binary complexity and Harvard architecture (separated code/data). Current obstacles include browsers not providing APIs for WASM module URLs, tools like wasm-bindgen destroying DWARF debug info, and the absence of standardised build IDs. Sentry implements workarounds using wasm-split. The ecosystem is improving but significant gaps remain.

**Key takeaways:**
- DWARF is the correct debug format for WebAssembly; source maps are insufficient for the binary complexity.
- Browser APIs for dynamic WASM module tracking do not yet exist, complicating crash reporting.
- wasm-bindgen's destruction of DWARF info is a significant obstacle for production WASM debugging.

---

### [You can't Rust that](https://lucumr.pocoo.org/2018/3/31/you-cant-rust-that/)
**Type:** Article
**Date:** 2018-03
**Tags/Topics:** Rust, ownership, self-referential structs, reference counting, interior mutability

Ronacher's practical guide to three common Rust patterns that frustrate beginners: self-referential structs (use handles/offsets instead of pointers), ownership ambiguity (use `Arc<T>` and `Rc<T>` instead of fighting the borrow checker), and interior mutability for shared mutable state (promote new state to "current" rather than enabling mutation through `RwLock`). The mantra: use handles, reference count, promote new state. These patterns align with Rust's design rather than fighting it.

**Key takeaways:**
- Self-referential structs are not directly expressible in Rust; handles that compute pointers on demand are the alternative.
- Reference counting (`Arc<T>`) resolves ownership ambiguity more cleanly than fighting the borrow checker.
- Immutable state with atomic promotion (swap current config pointer) is preferable to `RwLock` mutation.

---

### [Rust and Rest](https://lucumr.pocoo.org/2016/7/10/rust-rest/)
**Type:** Article
**Date:** 2016-07
**Tags/Topics:** Rust, REST, HTTP, curl, API design, error handling

Ronacher builds a REST API client in Rust for the Sentry API and documents lessons learned. Library choice: `rust-curl` over `hyper` for cross-platform SSL integration. API design: four-layer architecture (`Api`, `ApiRequest`, `ApiResponse`, `ApiResult<T>`) with a builder pattern. Key insight on error handling: defer error conversion — keep failed HTTP responses as response objects rather than converting to errors immediately, enabling conditional logic before failure. Uses `RefCell` for mutable curl handle state with runtime rather than compile-time safety.

**Key takeaways:**
- Deferring error conversion in HTTP clients enables more flexible conditional logic before signaling failure.
- `rust-curl` over `hyper` provides superior cross-platform SSL without sacrificing Rust safety.
- `RefCell` is appropriate when compile-time borrow checking is too restrictive for stateful single-threaded handles.

---

### [Rust for Python Programmers](https://lucumr.pocoo.org/2015/5/27/rust-for-pythonistas/)
**Type:** Article
**Date:** 2015-05
**Tags/Topics:** Rust, Python, ownership, error handling, Unicode, learning curve

An introduction to Rust aimed at Python developers. Key comparisons: Rust requires explicit type annotations vs Python's type inference; ownership and borrowing eliminate garbage collection; errors propagate explicitly through `Result<T, E>` rather than exceptions; UTF-8 is always the internal string encoding without encoding/decoding overhead. Both languages share similar API design philosophies — traits vs protocols, closures, iterators. Rust targets the cases where Python is too slow: systems programming, performance-sensitive applications, concurrent code.

**Key takeaways:**
- Rust and Python share API design philosophies (traits/protocols, closures, iterators) despite very different execution models.
- Rust's explicit error propagation through `Result` forces acknowledgment of failures that Python exceptions can hide.
- UTF-8 internal string encoding in Rust eliminates the encoding/decoding overhead that complicates Python string handling.

---

### [Improved Error Handling in Rust](https://lucumr.pocoo.org/2014/11/6/error-handling-in-rust/)
**Type:** Article
**Date:** 2014-11
**Tags/Topics:** Rust, error handling, FromError, multidispatch, API design

A follow-up to the earlier error handling post, documenting improvements as Rust approaches 1.0. The `FromError` trait provides standardised error conversion: function signatures define the target error type, and `try!` uses `FromError` to automatically convert errors to the expected type. This enables clean error chaining while preserving cause information. Four error design patterns are identified: simple enums, complex enums preserving causes, struct-like enum variants with conditional details, and fat error structs.

**Key takeaways:**
- `FromError` enables automatic error conversion at call sites, reducing boilerplate in error-handling code.
- Error types are an API contract; the decision of how much cause information to surface has real consequences.
- The `try!` macro (later `?`) combined with `FromError` makes Rust error propagation nearly as ergonomic as exceptions.

---

### [Don't Panic! The Hitchhiker's Guide to Unwinding](https://lucumr.pocoo.org/2014/10/30/dont-panic/)
**Type:** Article
**Date:** 2014-10
**Tags/Topics:** Rust, panic, stack unwinding, process isolation, error handling philosophy

Ronacher argues that Rust should ultimately move toward disabling stack unwinding in favour of process-level isolation, but this requires first reducing unnecessary panics in standard library APIs. Current problems: too many APIs panic unnecessarily (including `println!`), unwinding is non-standardised across languages, and DWARF-based unwinding on AMD64 is technically complex. Better path: operating system isolation through separate processes, enabling watchdog architectures that survive worker crashes.

**Key takeaways:**
- Stack unwinding is technically complex and non-portable; process isolation is a cleaner long-term approach.
- Many current Rust API panics are unnecessary and should return `Result` instead.
- Reducing panics is a prerequisite for disabling unwinding; premature disabling would break too much.

---

### [On Error Handling in Rust](https://lucumr.pocoo.org/2014/10/16/on-error-handling/)
**Type:** Article
**Date:** 2014-10
**Tags/Topics:** Rust, error handling, API design, redis-rs, Result types

Ronacher's initial deep dive into Rust error handling, written after implementing a Redis library. Core tension: functions must return a single error type, but real implementations encounter multiple error types that cross abstraction boundaries. He explores the trade-offs between transparent error types (expose underlying causes), opaque error types (hide implementation details), and hybrid approaches. Introduces the `FromError`/`try!` pattern as the emerging solution.

**Key takeaways:**
- Single error types per function create a tension between API stability and error transparency.
- The `try!`/`?` pattern combined with `FromError` elegantly resolves multi-error-type functions.
- Error handling design is a genuine API design problem with no universal answer.

---

### [A Fresh Look at Rust](https://lucumr.pocoo.org/2014/10/1/a-fresh-look-at-rust/)
**Type:** Article
**Date:** 2014-10
**Tags/Topics:** Rust, language overview, borrow checker, Cargo, FFI

Ronacher's updated assessment of Rust after a break from it. New framing: Rust occupies the unique space between Python's expressiveness and C/C++'s systems control, without C++'s fragmentation and complexity. The borrow checker is now seen as a feature rather than an obstacle — it "prevents you from building up some of the worst technical debt you can acquire." Cargo, documentation tools, and FFI support make real-world development practical. Potential for widespread adoption is high.

**Key takeaways:**
- Rust's borrow checker prevents long-term technical debt that other languages accumulate silently.
- The language occupies a unique niche: Python-level expressiveness + C-level control + memory safety.
- Cargo's quality as a package manager and build system is a significant competitive advantage.

---

### [Such a Little Thing: The Semicolon in Rust](https://lucumr.pocoo.org/2012/10/18/such-a-little-thing/)
**Type:** Article
**Date:** 2012-10
**Tags/Topics:** Rust, language design, semicolons, expression-oriented programming, type system

Ronacher analyses Rust's semantic use of semicolons: trailing semicolons discard values, absence of trailing semicolons returns them from blocks. This elegantly bridges expression-oriented programming (where almost everything returns a value) with static typing (which requires deliberate intent). Unlike Ruby where "the last expression returns" can cause unexpected side effects, Rust requires explicit intent. The semicolon design demonstrates how small syntactic decisions reflect and enforce deep language philosophy.

**Key takeaways:**
- Rust's semicolon semantics make expression-oriented programming safe in a statically typed context.
- Small syntactic decisions encode and enforce deep design philosophy about intent vs side effects.
- Taking a strong stance on a small detail is better than compromising and inheriting ambiguity from other languages.
