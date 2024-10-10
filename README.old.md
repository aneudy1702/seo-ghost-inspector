# seo-ghost-inspector

The application uses the Google Custom Search API to determine if a webpage is indexed. This API behaves similarly to how you would manually search for a URL on Google by typing site:<URL> in the search bar.

When a request is made, the application sends this type of query through the API. The API then searches for the URL in Google's index and returns relevant information if the URL is found, such as the page title and a snippet of text.

If the URL is not present in Google's search index, the application logs that the page is not indexed and offers a link for users to manually verify it on Google. By automating this process, we efficiently check multiple URLs and get a status similar to what we'd see from manual searches, but in a more streamlined and scalable manner.

This approach allows us to quickly understand which pages are indexed and offers insights into their SEO status.

```bash
src/
├── components/
│   ├── Modal.tsx            # Modal for Google API Credentials
│   ├── Header.tsx           # Header component with tool name and info
│   ├── UrlForm.tsx          # Form for adding URLs
│   ├── UrlList.tsx          # Component displaying the list of URLs and their SEO info
│   ├── SeoInfoPanel.tsx     # Component for SEO data and fetching HTML
│   └── IFramePreview.tsx    # Component for previewing the fetched HTML
├── hooks/
│   ├── useLocalStorage.ts   # Custom hook for managing local storage
│   ├── useGoogleSearchApi.ts # Hook for interacting with Google Custom Search API
├── App.tsx                  # Main app component
├── index.tsx                # Entry point
└── styles/
    ├── tailadmin.css        # TailAdmin and custom styles
```
