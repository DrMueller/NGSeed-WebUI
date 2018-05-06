FROM microsoft/aspnetcore:2.0
WORKDIR /app
COPY ./DockerContent .
EXPOSE 80
ENTRYPOINT ["dotnet", "Mmu.Ngs.WebApi.dll"]