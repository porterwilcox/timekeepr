FROM microsoft/dotnet:2.1.402-sdk
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet time.dll