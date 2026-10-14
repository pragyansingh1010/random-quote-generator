# Quote Data Format

Each quote record should include a non-empty quote string and may include an author. Normalize surrounding whitespace during data preparation. If the list is empty, show a helpful fallback instead of failing. Treat quote text as plain text when rendering, and ensure copy/share controls handle unavailable browser permissions.