export default function bookRequestForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(event);

    const data = {
      title: event.target.title.value,
      author: event.target.author.value,
      format: event.target.title.value,
      notification: event.target.notification.checked,
      email: event.target.email.value,
      name: event.target.name.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/bookForm";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(result)
  };
  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="drop-shadow-xl">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="mb-3">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Request a book
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              I'll try to get it within a day or two
            </p>
          </div>

          <div className="grid auto-rows-max grid-cols-6 gap-6">
            <div className="col-span-6 flex-row sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="off"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 col-start-1 sm:col-span-2">
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-700"
              >
                Author
              </label>
              <input
                type="text"
                name="author"
                id="author"
                autoComplete="on"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="format"
                className="block text-sm font-medium text-gray-700"
              >
                Format
              </label>
              <select
                id="format"
                name="format"
                autoComplete="off"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>eBook</option>
                <option>Audiobook</option>
                <option>Either is fine!</option>
                <option>Both please!</option>
              </select>
            </div>

            <div className="col-span-6">
              <div className="grid sm:grid-cols-4">
                <div className="sm:col-span-1">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Notifications
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Do you want to be notified when your book is ready? Email
                    might be easiest for automation in the future but for now
                    you can leave your name and I'll let you know.
                  </p>
                </div>
                <div className="my-4 sm:col-span-2 sm:mx-4">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="notification"
                        name="notification"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="notification"
                        className="font-medium text-gray-700"
                      >
                        Get notified
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 sm:text-left">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
